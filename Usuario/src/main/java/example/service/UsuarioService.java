import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.ValidationException;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario registrarUsuario(Usuario usuario) {
        // Validar os dados do usuário
        if (usuarioRepository.existsByEmail(usuario.getEmail())) {
            throw new ValidationException("E-mail já cadastrado");
        }
        // verificar se a senha coincide com a confirmação
        if (!usuario.getSenha().equals(usuario.getConfirmacaoSenha())) {
            throw new ValidationException("A senha e a confirmação de senha não coincidem");
        }
        // Validar outros critérios, como duplicação de e-mail.
        if (usuarioRepository.existsByEmail(usuario.getEmail())) {
            throw new ValidationException("E-mail já cadastrado");
        }
        // Salvar o usuário no banco de dados
        return usuarioRepository.save(usuario);
    }

}