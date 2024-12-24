import {BACKEND_HOST,BACKEND_PORT} from '@env';
interface QRCodePayload {
    type: string;
    data: string;
}

/**
 * createQRCode
 * Envia um QRCode para o backend por meio de uma requisição POST.
 *
 * @param payload Objeto contendo `type` e `data` a serem enviados na requisição.
 * @returns Resposta em JSON do servidor ou lança erro caso a requisição falhe.
 */
export async function createQRCode(payload: QRCodePayload) {
    const API_URL = `http://${BACKEND_HOST}:${BACKEND_PORT}`;

    const response = await fetch(`${API_URL}/qrcodes`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload),
    });

    // if(!response.ok) {
    //     throw new Error(`Erro ao criar QR Code no servidor.,${JSON.stringify(response)}`);
    // }

    return response.json();
}
