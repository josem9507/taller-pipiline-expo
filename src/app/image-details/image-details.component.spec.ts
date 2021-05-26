import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ImageDetailComponent } from './image-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';
import { By } from "@angular/platform-browser";

describe('ImageDetailsComponent', () => {
  let component: ImageDetailComponent;
  let fixture: ComponentFixture<ImageDetailComponent>;

  describe('Imagen valida', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [ImageDetailComponent],
        providers: [ImageService, {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: '1' } }
          }
        }],
      });
      fixture = TestBed.createComponent(ImageDetailComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('Debe crear el componente de una imagen valida', () => {
      expect(component).toBeTruthy();
    });

    it('Dada una id de una imagen que esta en la lista, se verifica que se muestre la imagen', () => {
      const compiled = fixture.debugElement;
      const titleContainer = compiled.queryAll(By.css('.img-container'));
      const getStyles = titleContainer[0].nativeElement.getAttribute('style');
      expect(getStyles).toContain('.jpg');
    });
  });

  describe('Imagen invalida', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [ImageDetailComponent],
        providers: [ImageService, {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: '260' } }
          }
        }],
      });
      fixture = TestBed.createComponent(ImageDetailComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('Debe crear el componente de una imagen invalida', () => {
      expect(component).toBeTruthy();
    });

    it('Dada una id de una imagen que no esta en la lista, se verifica que no se muestre la imagen', fakeAsync(() => {
      const compiled = fixture.debugElement;
      const titleContainer = compiled.queryAll(By.css('.img-container'));
      const getStyles = titleContainer[0].nativeElement.getAttribute('style');
      expect(getStyles).not.toContain('.jpg');
    }));
  });
});