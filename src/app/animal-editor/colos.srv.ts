import { InjectionToken, Sanitizer, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
const PRESETS = [
  {
    name: 'Purple Bliss',
    color: 'linear-gradient(to right, rgb(54, 0, 51), rgb(11, 135, 147))',
  },
  {
    name: 'Crazy Orange',
    color: 'linear-gradient(to right, rgb(211, 131, 18), rgb(168, 50, 121))',
  },
  {
    name: 'Magic',
    color: 'linear-gradient(to right, rgb(157, 80, 187), rgb(110, 72, 170))',
  },
  {
    name: 'Fantasy',
    color: 'linear-gradient(to right, rgb(150, 80, 17), rgb(110, 2, 170))',
  },
  {
    name: 'New Color',
    color: 'linear-gradient(to right, rgb(10, 80, 170), rgb(11, 20, 170))',
  },
];
//!Тут сказати про ін'єкцію токенів!!! Останній слайд
export const COLORS = new InjectionToken<any[]>('Colors', {
  providedIn: 'root',
  factory: () => {
    //bypassSecurityTrustStyle - Обійти безпеку
    //та довіряти наданому значенню значення безпечного стилю (CSS)
    // DomSanitizer допомагає запобігти помилкам безпеки міжсайтових сценаріїв (XSS),
    // дезінфікуючи значення,
    //  щоб вони були безпечними для використання в різних контекстах DOM.
    // bypassSecurityTrustStyle -  Обійти безпеку та довіряти наданому значенню
    // значення безпечного стилю (CSS).
    const { bypassSecurityTrustStyle } = inject(DomSanitizer);
    return PRESETS.map(({ name, color }) => ({
      name,
      color: bypassSecurityTrustStyle(color),
    }));
  },
});
