import { Component, OnInit } from '@angular/core';
import { Toast, ToastService } from 'src/app/shared/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  toast: Toast | null = null;

  get iconClass(): string {
    switch (this.toast?.type) {
      case 'success':
        return 'bi bi-check-circle-fill';
      case 'error':
        return 'bi bi-x-circle-fill';
      default:
        return '';
    }
  }

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toastService.toastState$.subscribe((toast) => {
      this.toast = toast;
      setTimeout(() => {
        this.toast = null;
      }, 5000);
    });
  }
}
