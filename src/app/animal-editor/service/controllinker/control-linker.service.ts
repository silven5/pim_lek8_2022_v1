import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ControlLinkerService<T extends AbstractControl = AbstractControl>{
  //Множина котролів
  protected links: Set<T> = new Set();
  //Список підписок
  protected subscriptions: Map<T, Subscription> = new Map();
  constructor() { }
  get value(): any {
    const [control] = Array.from(this.links);
    return control.value;
  }
//Региструємо інші AbstractControl та підписуємося на їх зміни
  public link(control: T): void {
    const subscription = control.valueChanges.subscribe(
      (value) => this.patchValue(value, { emitEvent: false })
    );
    this.subscriptions.set(control, subscription);
    this.links.add(control);
    this.patchValue(this.value, { emitEvent: false });
  }
//Видаляємо зі списку і відписуємося  AbstractControl
  public unlink(control: T): void {
    this.subscriptions.get(control).unsubscribe();
    this.links.delete(control);
  }

  public patchValue(value: any, options?: Object): void {
    this.links.forEach(link => link.patchValue(value, options));
  }

  public dispose(): void {
    this.links.forEach((link) => this.unlink(link));
  }
}
