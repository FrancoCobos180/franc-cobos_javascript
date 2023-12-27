function calcularCuotas() {
    const monto = parseInt(document.getElementById('monto').value);
    const cuotas = parseInt(document.getElementById('cuotas').value);
  
    if (isNaN(monto) || isNaN(cuotas) || monto <= 0 || cuotas <= 0) {
      document.getElementById('resultado').innerHTML = 'Por favor, ingresa valores válidos.';
    } else {
      const interesAnual = 10; 
      const interesMensual = interesAnual / 12;
  
      const calculoCuota = monto * (interesMensual * (Math.pow(1 + interesMensual, cuotas))) / (Math.pow(1 + interesMensual, cuotas) - 1);
      const cuotaFinal = calculoCuota.toFixed(2);
  
      document.getElementById('resultado').innerHTML = `La cuota mensual es de $${cuotaFinal} por ${cuotas} meses.`;
    }
  }