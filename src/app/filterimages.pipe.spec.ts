import { FilterimagesPipe } from './filterimages.pipe';
import { ImageService } from './image.service';

describe('FilterimagesPipe', () => {
  let pipe: FilterimagesPipe;
  let service: ImageService;
  const items = [];

  beforeAll(() => {
    pipe = new FilterimagesPipe();
    service = new ImageService();
    service.getImages().forEach(element => {
      items.push(element);
    });
  });

  it('Debe crear la instancia del pipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('Debe filtrar por la etiqueta all y retornar todos los elementos', () => {
    const filteredResult = pipe.transform(items, 'all');
    expect(filteredResult.length).toBe(5);
  });

  it('Debe filtrar por la etiqueta perro y retornar todos los perros', () => {
    const filteredResult = pipe.transform(items, 'perro');
    expect(filteredResult.length).toBe(3);
  });

  it('Debe filtrar por la etiqueta gato y retornar todos los gatos', () => {
    const filteredResult = pipe.transform(items, 'gato');
    expect(filteredResult.length).toBe(2);
  });

  it('Debe filtrar por una etiqueta que no exista y no debe retornar nada', () => {
    const filteredResult = pipe.transform(items, 'nada');
    expect(filteredResult.length).toBe(0);
  });
});
