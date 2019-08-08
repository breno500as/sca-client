import { MarcaModelo } from './tipoMarcaModelo';
import { TipoInsumo } from './tipoInsumo';
import { SubTipoInsumo } from './subTipoInsumo';

export class Insumo  {
     id: number;
     tipoMarcaModelo: MarcaModelo;
     tipoInsumo: TipoInsumo;
     subTipoInsumo: SubTipoInsumo;
     observacoes: string;
     linkInformacoesTecnicasFornecedor: string;
     quantidade: number;
}
