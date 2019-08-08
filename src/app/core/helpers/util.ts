export const MSG_SALVO_SUCESSO = 'Registro salvo com sucesso!';
export const MSG_ATUALIZADO_SUCESSO = 'Registro atualizado com sucesso!';
export const MSG_EXCLUIDO_SUCESSO = 'Registro excluído com sucesso!';

export function equalsById(obj1: any, obj2: any): boolean {
    if (obj1 && obj2) {
        return obj1['id'] === obj2['id'];
    }
}
