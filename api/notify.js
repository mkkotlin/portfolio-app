export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // 100% Secure: Webhook URL is read exclusively from Vercel Environment Variables
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    return res.status(500).json({ 
      error: 'DISCORD_WEBHOOK_URL environment variable is missing on Vercel.' 
    });
  }

  const { user, type } = req.body || {};

  const isResume = type === 'Resume Access';
  const eventTitle = isResume ? '📄 Resume CV Accessed!' : '📱 Phone Number Revealed!';
  const eventDescription = isResume
    ? 'A visitor verified identity via Google OAuth to view/print your Resume CV on your portfolio.'
    : 'A visitor verified identity via Google OAuth to view your phone number on your portfolio.';
  const eventColor = isResume ? 3447003 : 3066993; // Cyan or Emerald

  const embedPayload = {
    username: 'Portfolio Security Audit',
    avatar_url: 'https://cdn-icons-png.flaticon.com/512/1041/1041916.png',
    embeds: [
      {
        title: eventTitle,
        description: eventDescription,
        color: eventColor,
        thumbnail: user?.picture ? { url: user.picture } : undefined,
        fields: [
          { name: '👤 Verified Name', value: user?.name || 'Unknown', inline: true },
          { name: '✉️ Verified Email', value: user?.email || 'Unknown', inline: true },
          { name: '🕒 Access Time', value: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }), inline: false }
        ],
        footer: { text: 'Identity Audit Trail • Anti-Spam Protection Active' }
      }
    ]
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(embedPayload)
    });

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ error: 'Failed to dispatch Discord Webhook notification' });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
