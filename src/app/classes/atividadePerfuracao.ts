import { RegistroOcorrencia } from './registroOcorrencia';
import { UsuarioMineradora } from './usuarioMineradora';

export class AtividadePerfuracao {
     id: number;
     orientacoes: string;
     usuarioMineradora: UsuarioMineradora;
     usuarioMineradoraId: number;
     registrosOcorrencias: Array<RegistroOcorrencia>;
     dataInicioAtividade: Date;
     dataTerminoAtividade: Date;
     totalElementos: number;
}
