import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as AOS from 'aos';
import emailjs from '@emailjs/browser';
import { ToastService } from './shared/toast.service';
import {
  PUBLIC_KEY,
  serviceID,
  templateID,
} from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form: FormGroup;
  isLoading: boolean;
  date = new Date().getFullYear();
  isMenuOpen = false;

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });

    window.addEventListener('load', () => {
      document.body.classList.add('loaded');
    });
  }

  projects = [
    {
      title: 'Infrest Website',
      Img: './assets/image/infrest website.PNG',
      desc: 'A robust inventory tracking application allowing real-time stock monitoring and reporting.',
      skiils: ['Angular', 'Spring boot', 'Scss', 'Typescript'],
      url: 'https://web.infrestng.com/',
    },
    {
      title: 'Infrest Application Dashboard',
      Img: './assets/image/dashboard.PNG',
      desc: 'A robust inventory tracking application allowing real-time stock monitoring and reporting.',
      skiils: ['Angular', 'Tailwind Css', 'Typescript'],

      url: 'https://app.infrestng.com',
    },

    {
      title: 'Food Recipe Website',
      Img: './assets/image/food recipe.PNG',
      desc: 'A modern recipe platform where users can discover, save, and manage their favorite meals with ease.',
      skiils: ['React', 'Tailwind css', 'Firebase', 'Typescript'],
      url: 'https://yumbinder.vercel.app/home',
    },

    {
      title: 'Rapid Pay Website',
      Img: './assets/image/rapid pay.PNG',
      desc: 'An engaging landing page built to promote a fast and secure mobile banking experience with intuitive design and clear user flow.',
      skiils: ['React', 'Tailwind css', 'Typescript'],
      url: 'https://rapidpayweb.vercel.app/',
    },
  ];

  testimonials = [
    {
      name: 'Joesph Ogiolu',
      title: 'CTO at Jalade Technology Limited',
      text: 'Working with Ebuka was an amazing experience. His attention to detail, problem-solving skills, and dedication to delivering quality solutions exceeded our expect',
    },
    {
      name: 'Iyanuoluwa Hassan',
      title: 'Software Consultant at Infrest System Limited',

      text: 'Working with him has been an absolute pleasure. He is calm and professional demeanor,he make a fantastic team player and a valuable asset to any project.',
    },
    {
      name: 'Omotosho Eniola',
      title: 'Frontend Developer',
      text: 'Here I had the pleasure of collaborating with him at Upperlink limited where we work on building web application projects. He consistently demonstrated strong technical skills.',
    },
  ];
  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }

  ngAfterViewChecked(): void {
    AOS.refreshHard();
  }
  onScroll(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth' });
    this.isMenuOpen = false;

    requestAnimationFrame(() => {
      AOS.refreshHard();
    });
  }

  onSidebar() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onSubmit() {
    if (this.form.valid) {
      this.isLoading = true;
      emailjs.send(serviceID, templateID, this.form.value, PUBLIC_KEY).then(
        () => {
          this.toastService.success('Message Sent');
          this.form.reset();
          this.isLoading = false;
        },
        (err) => {
          this.toastService.error('Message Failed');
          this.isLoading = false;
        },
      );
    } else {
      this.toastService.error('Field Validation Error');
    }
  }
}
