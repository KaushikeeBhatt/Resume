module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    console.log('Test API called:', req.method, req.url);
    
    // Check environment variables
    const envCheck = {
      EMAIL_USER: process.env.EMAIL_USER ? 'Set' : 'Not Set',
      EMAIL_PASS: process.env.EMAIL_PASS ? 'Set' : 'Not Set'
    };

    res.status(200).json({ 
      success: true, 
      message: 'Test endpoint working!',
      timestamp: new Date().toISOString(),
      environment: envCheck
    });

  } catch (error) {
    console.error('Test API error:', error);
    res.status(500).json({ 
      error: 'Test endpoint failed',
      details: error.message 
    });
  }
}; 