import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  isSubmitting = false;

  onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;

    // Simular envio do formulário
    setTimeout(() => {
      console.log('Formulário enviado:', this.formData);

      // Reset do formulário
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: '',
      };

      this.isSubmitting = false;
      alert('Mensagem enviada com sucesso!');
    }, 2000);
  }
}
