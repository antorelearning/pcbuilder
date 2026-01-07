// Grab dropdowns
const cpuSelect = document.getElementById('cpu');
const motherboardSelect = document.getElementById('motherboard');
const ramSelect = document.getElementById('ram');
const storageSelect = document.getElementById('storage');
const gpuSelect = document.getElementById('gpu');
const psuSelect = document.getElementById('psu');
const caseSelect = document.getElementById('case');
const osSelect = document.getElementById('os');
const monitorSelect = document.getElementById('monitor');
const keyboardSelect = document.getElementById('keyboard');
const mouseSelect = document.getElementById('mouse');

const mbSection = document.getElementById('mb-section');
const ramSection = document.getElementById('ram-section');
const storageSection = document.getElementById('storage-section');
const psuSection = document.getElementById('psu-section');
const caseSection = document.getElementById('case-section');
const osSection = document.getElementById('os-section');

const totalPriceElement = document.getElementById('total-price');

// Component icons + tooltips
const componentInfo = {
  cpu: { icon: "🧠", tooltip: "The brain of your PC" },
  motherboard: { icon: "🧩", tooltip: "Connects all components" },
  ram: { icon: "💾", tooltip: "Helps your PC run smoothly" },
  storage: { icon: "🗄️", tooltip: "Stores your files and OS" },
  gpu: { icon: "🎮", tooltip: "Needed for gaming & graphics" },
  psu: { icon: "🔌", tooltip: "Provides power safely" },
  case: { icon: "🏠", tooltip: "Holds all components" },
  os: { icon: "🪟", tooltip: "Allows you to use your PC" },
  monitor: { icon: "🖥️", tooltip: "Displays everything" },
  keyboard: { icon: "⌨️", tooltip: "Used for typing" },
  mouse: { icon: "🖱️", tooltip: "Used to control cursor" }
};

// Fill dropdown
function fillDropdown(selectElement, items, type) {
  items.forEach(item => {
    const option = document.createElement('option');
    option.value = item.price;
    option.text = `${componentInfo[type].icon} ${item.name} — $${item.price}`;
    option.title = componentInfo[type].tooltip;
    selectElement.appendChild(option);
  });
}

// Fill all dropdowns
fillDropdown(cpuSelect, pcData.cpu, "cpu");
fillDropdown(motherboardSelect, pcData.motherboard, "motherboard");
fillDropdown(ramSelect, pcData.ram, "ram");
fillDropdown(storageSelect, pcData.storage, "storage");
fillDropdown(gpuSelect, pcData.gpu, "gpu");
fillDropdown(psuSelect, pcData.psu, "psu");
fillDropdown(caseSelect, pcData.case, "case");
fillDropdown(osSelect, pcData.os, "os");
fillDropdown(monitorSelect, pcData.monitor, "monitor");
fillDropdown(keyboardSelect, pcData.keyboard, "keyboard");
fillDropdown(mouseSelect, pcData.mouse, "mouse");

// Unlock next section
function unlockNext() {
  if(cpuSelect.value) mbSection.classList.remove('locked');
  if(motherboardSelect.value) ramSection.classList.remove('locked');
  if(ramSelect.value) storageSection.classList.remove('locked');
  if(storageSelect.value) psuSection.classList.remove('locked');
  if(psuSelect.value) caseSection.classList.remove('locked');
  if(caseSelect.value) osSection.classList.remove('locked');
}

// Update total cost
function updateTotal() {
  unlockNext();
  let total = 0;
  const selects = [cpuSelect, motherboardSelect, ramSelect, storageSelect, gpuSelect, psuSelect, caseSelect, osSelect, monitorSelect, keyboardSelect, mouseSelect];
  selects.forEach(sel => {
    if(sel.value) total += parseFloat(sel.value);
  });
  totalPriceElement.textContent = `$${total.toFixed(2)}`;
}
