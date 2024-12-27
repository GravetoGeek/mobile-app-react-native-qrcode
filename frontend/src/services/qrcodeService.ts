import {BACKEND_HOST,BACKEND_PORT} from '@env';

interface QRCodePayload {
    type: string;
    data: string;
}

const API_URL = `${BACKEND_HOST}:${BACKEND_PORT}`;
const HEADERS = { 'Content-Type': 'application/json' };

/**
 * createQRCode
 * Envia um QRCode para o backend por meio de uma requisição POST.
 *
 * @param payload Objeto contendo `type` e `data` a serem enviados na requisição.
 * @returns Resposta em JSON do servidor ou lança erro caso a requisição falhe.
 */
export async function createQRCode(payload: QRCodePayload): Promise<any> {
    let fullUrl = `http://${API_URL}/qrcodes`;
    console.log({fullUrl});
    try {
        return fetch(fullUrl, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(payload),
        });

    } catch (error) {
        console.error('Network request failed', error);
        throw error;
    }
}
