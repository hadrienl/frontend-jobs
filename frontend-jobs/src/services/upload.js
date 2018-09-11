export default async function upload(file) {
  const formData = new FormData();
  formData.append('file', file);

  const resp = await fetch('https://fhirtest.uhn.ca/baseDstu3/Binary', {
    method: 'post',
    body: formData,
  });

  if (!resp.ok) throw new Error(resp.statusText);

  return await resp.json();
}
