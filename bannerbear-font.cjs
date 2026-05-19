const API_KEY = 'bb_pr_ff742ac2277c57093b45cfe1ebdf7b';
const TEMPLATE_UID = 'j14WwV5VMj6nZa7XrB';

async function run() {
  const response = await fetch(`https://api.bannerbear.com/v2/templates/${TEMPLATE_UID}`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      available_modifications: [
        { name: 'hook',     font_family: 'Montserrat', font_weight: '900' },
        { name: 'subtitle', font_family: 'Montserrat', font_weight: '400' }
      ]
    })
  });
  const data = await response.json();
  console.log('Status:', response.status);
  console.log('Modifications:', JSON.stringify(data.available_modifications, null, 2));
}
run().catch(console.error);
