export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, fullName } = body

  if (!email) {
    throw createError({
      statusCode: 400,
      message: 'Email requis'
    })
  }

  const apiKey = process.env.MAILCHIMP_API_KEY
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID
  const dc = process.env.MAILCHIMP_DC

  const url = `https://${dc}.api.mailchimp.com/3.0/lists/${audienceId}/members`

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `apikey ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        tags: ['Omi-soil'],
        merge_fields: {
          FNAME: fullName
        }
      })
    })

    const data = await response.json()

    if (!response.ok) {
      if (data.title === 'Member Exists') {
        throw createError({
          statusCode: 400,
          message: 'Cette adresse email est déjà inscrite'
        })
      }
      throw createError({
        statusCode: response.status,
        message: data.detail || 'Erreur lors de l\'inscription'
      })
    }

    return { success: true, message: 'Inscription réussie' }
  } catch (error: any) {
    if (error.statusCode) throw error
    throw createError({
      statusCode: 500,
      message: 'Erreur serveur'
    })
  }
})
