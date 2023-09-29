import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroComponent } from './registro.component';
import { FormsModule } from '@angular/forms';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable submit button when form is invalid', () => {
    component.usuario.nome = 'John'; // Nome inválido para acionar validação
    fixture.detectChanges();
    const submitButton = fixture.nativeElement.querySelector('button');
    expect(submitButton.disabled).toBe(true);
  });

  it('should enable submit button when form is valid', () => {
    component.usuario.nome = 'John Doe'; // Nome válido
    component.usuario.email = 'johndoe@example.com'; // E-mail válido
    component.usuario.senha = 'password'; // Senha válida
    component.usuario.confirmacaoSenha = 'password'; // Confirmação de senha válida
    fixture.detectChanges();
    const submitButton = fixture.nativeElement.querySelector('button');
    expect(submitButton.disabled).toBe(false);
  });
});
