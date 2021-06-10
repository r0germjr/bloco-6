function createStateOptions() {
  let brazilianStates = ['Acre (AC)',
  'Alagoas (AL)',
  'Amapá (AP)',
  'Amazonas (AM)',
  'Bahia (BA)',
  'Ceará (CE)',
  'Distrito Federal (DF)',
  'Espírito Santo (ES)',
  'Goiás (GO)',
  'Maranhão (MA)',
  'Mato Grosso (MT)',
  'Mato Grosso do Sul (MS)',
  'Minas Gerais (MG)',
  'Pará (PA)]',
  'Paraíba (PB)',
  'Paraná (PR)',
  'Pernambuco (PE)',
  'Piauí (PI)',
  'Rio de Janeiro (RJ)',
  'Rio Grande do Norte (RN)',
  'Rio Grande do Sul (RS)',
  'Rondônia (RO)',
  'Roraima (RR)',
  'Santa Catarina (SC)',
  'São Paulo (SP)',
  'Sergipe (SE)',
  'Tocantins (TO)'];
  let allStates = document.getElementById('states');

  for(let index = 0; index < brazilianStates.length; index += 1){
    let createOptions = document.createElement('option');
    allStates.appendChild(createOptions).innerText = brazilianStates[index];
    allStates.appendChild(createOptions).value = brazilianStates[index];
  }
}

createStateOptions();
  
function verifyDate() {
  const inputDate = document.getElementById('startDate');
  if (inputDate.value.length === 0) {
    return alert ('A data não foi preenchida');
  }

  let regex = /^\d\d\/\d\d\/\d\d\d\d$/; // regex do gabarito;

  if(!regex.test(inputDate.value)) {
    return alert('Data: Formato inválido!');
  }

  let splitted = inputDate.value.split('/');
  let day = splitted[0];
  let month = splitted[1];
  let year = splitted[2];

  if (day < 0 || day > 31) {
    return alert('Dia inválido');
  }

  if (month < 0 || month > 12) {
    return alert('Mês inválido');
  }

  if (year < 0) {
    return alert('Ano inválido');
  }
  return true;
}