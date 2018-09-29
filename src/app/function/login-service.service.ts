import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  readonly MIN_REDIRECT_TIME = 1000;
  readonly MAX_REDIRECT_TIME = 4000;
  readonly MIN_ERROR_TIME = 5000;
  readonly MAX_ERROR_TIME = 15000;
  private terminationDate: Date;

  public currentError = '';

  public errors = [
    'Sie waren leider zu langsam. Schade, wir sehen uns im nächsten Semester.',
    'Dieses Passwort ist schon vergeben. Versuchen Sie es erneut.', 'Der Server ist gerade leider überlastet. Versuchen Sie es erneut.',
    'Sie können dies nicht tun, weil Sie nicht eingeloggt sind. Loggen Sie sich bitte ein.',
    'Katastrophischer Fehler! Sie haben den Server zum Absturz gebracht. Dies wird sofort gemeldet.',
    'Sie haben nicht die nötigen Rechte um dies zu tun. Bitte wenden Sie sich an den Administrator.',
    'Die Verbindung ist leider fehlgeschlagen! Stellen Sie sicher, dass Ihr Betriebssystem mit dem Internet kompatibel ist.',
    'Die Verbindung ist leider fehlgeschlagen! Es sieht so aus als ob Sie etwas falsch gemacht haben.',
    'Sie haben Passwort und Unikennung vertauscht. Sie sollten sich das mit dem Studium noch mal überlegen.',
    'Die folgende Anwendung muss geschlossen werden damit Sie sich abmelden können: Campus HIS-in-One.',
    'Ein Fehler ist aufgetreten beim Darstellen eines vorherigen Fehlers.',
    'Odsbvciuoog9a8ur094756783ß48307?=?=)034. Es erwartet Niemand von Ihnen das Sie dies verstehen.',
    'Failed to startup Session. Socket error: Success.',
    'Sie sind leider nicht mit dem Internet verbunden. Verbinden Sie sich erneut und versuchen Sie es nochmal.',
    'His-in-One wurde geblockt! Blocking Application: His-in-One [PID: 534738]',
    'Keine Anwendung reagiert nicht.',
    'Wir bereiten Alles für Sie vor. Geschätzte Wartezeit 42345 Tage und 3 Stunden.',
    'Kopiere Daten 139%. Bitte Loggen Sie sich danach wieder ein.',
    'Wird nicht unterstützt. Die bedeutet das dies nicht unterstützt wird. Versuchen Sie es erneut.',
    'Unexpectet Exception: Es existiert kein Fehler!',
    'Ihr Keyboard konnte nicht erkannt werden. Bitte drücken Sie „z“ und „y“ gleichzeitig!',
    'His-In-One konnte das Plug-In zum herunterladen von Plug-Ins nicht finden. Ohne das Plug-In zum herunterladen von Plug-Ins können ' +
    'Sie keine Plug-Ins herunterladen.',
    'Fehler bei der Fehlerbehandlung! Die Fehlerbehandlung konnte aufgrund eines Fehlers nicht gestartet werden.',
    'Etwas lief schief!',
    'Nicht genügend Speicher um freien Speicher frei zu geben.',
    'Ihre Datenkapazität Ihres Online-Account ist überschritten! Wir konnten die 0MB nicht schreiben.',
    'Error Code: 42: User Error: Es ist deine Schuld.',
    'Beim Speichern der Änderung ist folgender Fehler aufgetreten: Der Vorgang',
  ];

  constructor(private router: Router) {
    this.terminationDate = new Date(2018, 8, 30, 0, 8, 0, 0);
  }

  public tryLogin(url: string, a: number, b: number): void {
    setTimeout( () => {
      if (new Date().getTime() < this.terminationDate.getTime()) {
        this.router.navigateByUrl(url);
      } else {
        // navigate to things page
        window.location.replace('http://robinboehm.github.io/hatersGonnaHate/');
      }
    }, this.random(a, b));
  }
  public random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min + 0.49);
  }

  public getNextError(): void {
    const now = new Date();
    this.currentError = this.errors[this.random(0, this.errors.length)];
    }
}
