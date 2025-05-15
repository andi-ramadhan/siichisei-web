export async function onRequestPost(context) {
  try{
    const data = await context.request.json();

    const { name, email, message } = data;

    if (!name || !email || !message) {
      return new Response('Missing fields', { status: 400 });
    }

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'service_npzpm2p',
        template_id: 'template_txizw0m',
        user_id: 'nfBSythfQTIwcaDjToUVw',
        template_params: { name, email, message },
      }),
    });

    if (!response.ok) {
      return new Response('Email failed', { status: 500 });
    }

    return new Response('Email sent', { status: 200 });

  } catch (err) {
    return new Response('Server error', { status: 500 });
  }
}