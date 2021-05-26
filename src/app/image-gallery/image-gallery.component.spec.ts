import { By } from "@angular/platform-browser";
import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { FilterimagesPipe } from '../filterimages.pipe';
import { GalleryComponent } from './image-gallery.component';
import { ImageService } from '../image.service';

describe('ImageGalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryComponent, FilterimagesPipe],
      providers: [ImageService, FilterimagesPipe],
    });
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Verifica que el titulo aparezca', () => {
    const compiled = fixture.debugElement;
    const titleContainer = compiled.queryAll(By.css('.col-sm-12'));
    expect(titleContainer[0].nativeElement.textContent.trim()).toBe('Pet Book Prueba Devops');
  });

  it('Debe crear las 5 imagenes y mostrarlas en pantalla', () => {
    const compiled = fixture.debugElement;
    const images = compiled.queryAll(By.css('img'));
    expect(images.length).toBe(5)
  });

  it('Filtra las imagenes de los gatos y muestra 2 imagenes', fakeAsync(() => {
    const compiled = fixture.debugElement;
    const buttons = compiled.queryAll(By.css('button'));
    const catButton = buttons.find(button => button.nativeElement.textContent === 'Gato').nativeElement;
    catButton.click();
    tick();
    fixture.detectChanges();
    const images = compiled.queryAll(By.css('img'));
    expect(images.length).toBe(2);
  }));

  it('Filtra las imagenes de los perros y muestra 3 imagenes', fakeAsync(() => {
    const compiled = fixture.debugElement;
    const buttons = compiled.queryAll(By.css('button'));
    const dogButton = buttons.find(button => button.nativeElement.textContent === 'Perro').nativeElement;
    dogButton.click();
    tick();
    fixture.detectChanges();
    const images = compiled.queryAll(By.css('img'));
    expect(images.length).toBe(3);
  }));

  it('Se da click en el botón "Perro" y luego en "All" y muestra 5 imagenes', fakeAsync(() => {
    const compiled = fixture.debugElement;
    const buttons = compiled.queryAll(By.css('button'));
    const dogButton = buttons.find(button => button.nativeElement.textContent === 'Perro').nativeElement;
    const allButton = buttons.find(button => button.nativeElement.textContent === 'All').nativeElement;
    dogButton.click();
    tick();
    fixture.detectChanges();
    allButton.click();
    tick();
    fixture.detectChanges();
    const images = compiled.queryAll(By.css('img'));
    expect(images.length).toBe(5);
  }));

  it('Verifica que los tres botones de "All", "Perro" y "Gato" aparezcan en pantalla', () => {
    const compiled = fixture.debugElement;
    const buttons = compiled.queryAll(By.css('button'));
    const dogButton = buttons.find(button => button.nativeElement.textContent === 'Perro').nativeElement;
    const allButton = buttons.find(button => button.nativeElement.textContent === 'All').nativeElement;
    const catButton = buttons.find(button => button.nativeElement.textContent === 'All').nativeElement;
    expect(dogButton).toBeTruthy();
    expect(allButton).toBeTruthy();
    expect(catButton).toBeTruthy();
  });
});