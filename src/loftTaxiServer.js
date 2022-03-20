export const serverLogin = async (email, password) => {
  return fetch(
    `https://loft-taxi.glitch.me/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({email, password})
    }
  ).then(res => res.json());
}

export const serverSaveCard = async (payload) => {
  return fetch(
    `https://loft-taxi.glitch.me/card`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(payload)
    }
  ).then(res => res.json());
}

export const serverLoadCard = async (token) => {
  return fetch(
    `https://loft-taxi.glitch.me/card?token=${token}`, {
      method: 'GET'
    }
  ).then(res => res.json());
}