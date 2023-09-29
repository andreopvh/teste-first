import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.ValidationException;
import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@Validated
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/registro")
    public ResponseEntity<?> registrarUsuario(@Valid @RequestBody Usuario usuario) {
        try {
            Usuario novoUsuario = usuarioService.registrarUsuario(usuario);
            return ResponseEntity.ok("Usuário registrado com sucesso");
        } catch (ValidationException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro no registro do usuário");
        }
    }

}
