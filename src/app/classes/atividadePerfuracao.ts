import { RegistroOcorrencia } from './registroOcorrencia';
import { UsuarioMineradora } from './usuarioMineradora';

export class AtividadePerfuracao {
     id: number;
     observacoes: string;
     usuarioMineradora: UsuarioMineradora;
     usuarioMineradoraId: number;
     registrosOcorrencias: Array<RegistroOcorrencia>;
     dataInicioAtividade: Date;
     dataPrevisaoTerminoAtividade: Date;
     totalElementos: number;
}
