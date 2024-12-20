import {TextStyle} from 'react-native';

/**
 * Tipografia centralizada para garantir consistência no estilo de texto em todo o aplicativo.
 * Inclui variantes para headers, subheaders, body, captions, entre outros.
 */
const typography = {
    fontFamily: 'Roboto, Arial, sans-serif' as TextStyle['fontFamily'],
    header: {
        fontSize: 24 as TextStyle['fontSize'],
        fontWeight: 'bold' as TextStyle['fontWeight'],
        lineHeight: 32 as TextStyle['lineHeight'], // Adicionado para melhorar legibilidade
        letterSpacing: 0.5 as TextStyle['letterSpacing'],
    },
    subHeader: {
        fontSize: 20 as TextStyle['fontSize'],
        fontWeight: '600' as TextStyle['fontWeight'],
        lineHeight: 28 as TextStyle['lineHeight'], // Melhor suporte para texto envolvente
        letterSpacing: 0.4 as TextStyle['letterSpacing'],
    },
    body: {
        fontSize: 16 as TextStyle['fontSize'],
        fontWeight: '400' as TextStyle['fontWeight'],
        lineHeight: 24 as TextStyle['lineHeight'], // Legibilidade para blocos de texto
        letterSpacing: 0.25 as TextStyle['letterSpacing'],
    },
    caption: {
        fontSize: 12 as TextStyle['fontSize'],
        fontWeight: '300' as TextStyle['fontWeight'],
        lineHeight: 16 as TextStyle['lineHeight'], // Suporte para textos pequenos
        letterSpacing: 0.15 as TextStyle['letterSpacing'],
    },
    small : {
        fontSize: 10 as TextStyle['fontSize'], // Para textos auxiliares, como labels
        fontWeight: '300' as TextStyle['fontWeight'],
        lineHeight: 14 as TextStyle['lineHeight'],
        letterSpacing: 0.1 as TextStyle['letterSpacing'],
    },
    button: {
        fontSize: 14 as TextStyle['fontSize'],
        fontWeight: '600' as TextStyle['fontWeight'],
        lineHeight: 20 as TextStyle['lineHeight'],
        letterSpacing: 0.75 as TextStyle['letterSpacing'],
    },
    link: {
        fontSize: 14 as TextStyle['fontSize'],
        fontWeight: '400' as TextStyle['fontWeight'],
        lineHeight: 20 as TextStyle['lineHeight'],
        letterSpacing: 0.5 as TextStyle['letterSpacing'],
    },
    error: {
        fontSize: 12 as TextStyle['fontSize'],
        fontWeight: '400' as TextStyle['fontWeight'],
        lineHeight: 16 as TextStyle['lineHeight'],
        letterSpacing: 0.4 as TextStyle['letterSpacing'],
    },
    input: {
        fontSize: 16 as TextStyle['fontSize'],
        fontWeight: '400' as TextStyle['fontWeight'],
        lineHeight: 24 as TextStyle['lineHeight'],
        letterSpacing: 0.5 as TextStyle['letterSpacing'],
    },
    label: {
        fontSize: 14 as TextStyle['fontSize'],
        fontWeight: '400' as TextStyle['fontWeight'],
        lineHeight: 20 as TextStyle['lineHeight'],
        letterSpacing: 0.5 as TextStyle['letterSpacing'],
    },
    placeholder: {
        fontSize: 14 as TextStyle['fontSize'],
        fontWeight: '400' as TextStyle['fontWeight'],
        lineHeight: 20 as TextStyle['lineHeight'],
        letterSpacing: 0.5 as TextStyle['letterSpacing'],
    },
    helper: {
        fontSize: 12 as TextStyle['fontSize'],
        fontWeight: '400' as TextStyle['fontWeight'],
        lineHeight: 16 as TextStyle['lineHeight'],
        letterSpacing: 0.4 as TextStyle['letterSpacing'],
    },
    meta: {
        fontSize: 10 as TextStyle['fontSize'],
        fontWeight: '400' as TextStyle['fontWeight'],
        lineHeight: 14 as TextStyle['lineHeight'],
        letterSpacing: 0.25 as TextStyle['letterSpacing'],
    },
    tag: {
        fontSize: 12 as TextStyle['fontSize'],
        fontWeight: '400' as TextStyle['fontWeight'],
        lineHeight: 16 as TextStyle['lineHeight'],
        letterSpacing: 0.25 as TextStyle['letterSpacing'],
    },
    badge: {
        fontSize: 10 as TextStyle['fontSize'],
        fontWeight: '400' as TextStyle['fontWeight'],
        lineHeight: 14 as TextStyle['lineHeight'],
        letterSpacing: 0.25 as TextStyle['letterSpacing'],
    },
    chip: {
        fontSize: 12 as TextStyle['fontSize'],
        fontWeight: '400' as TextStyle['fontWeight'],
        lineHeight: 16 as TextStyle['lineHeight'],
        letterSpacing: 0.25 as TextStyle['letterSpacing'],
    },
    tooltip: {
        fontSize: 10 as TextStyle['fontSize'],
        fontWeight: '400' as TextStyle['fontWeight'],
        lineHeight: 14 as TextStyle['lineHeight'],
        letterSpacing: 0.25 as TextStyle['letterSpacing'],
    },
    popover: {
        fontSize: 14 as TextStyle['fontSize'],
        fontWeight: '400' as TextStyle['fontWeight'],
        lineHeight: 20 as TextStyle['lineHeight'],
        letterSpacing: 0.5 as TextStyle['letterSpacing'],
    },
    dropdown: {
        fontSize: 14 as TextStyle['fontSize'],
        fontWeight: '400' as TextStyle['fontWeight'],
        lineHeight: 20 as TextStyle['lineHeight'],
        letterSpacing: 0.5 as TextStyle['letterSpacing'],
    },
    modal: {
        fontSize: 16 as TextStyle['fontSize'],
        fontWeight: '400' as TextStyle['fontWeight'],
        lineHeight: 24 as TextStyle['lineHeight'],
        letterSpacing: 0.5 as TextStyle['letterSpacing'],
    },
    toast: {
        fontSize: 14 as TextStyle['fontSize'],
        fontWeight: '400' as TextStyle['fontWeight'],
        lineHeight: 20 as TextStyle['lineHeight'],
        letterSpacing: 0.5 as TextStyle['letterSpacing'],
    },
    snackbar: {
        fontSize: 14 as TextStyle['fontSize'],
        fontWeight: '400' as TextStyle['fontWeight'],
        lineHeight: 20 as TextStyle['lineHeight'],
        letterSpacing: 0.5 as TextStyle['letterSpacing'],
    },
    banner: {
        fontSize: 16 as TextStyle['fontSize'],
        fontWeight: '400' as TextStyle['fontWeight'],
        lineHeight: 24 as TextStyle['lineHeight'],
        letterSpacing: 0.5 as TextStyle['letterSpacing'],
    },
    carousel: {
        fontSize: 16 as TextStyle['fontSize'],
        fontWeight: '400' as TextStyle['fontWeight'],
        lineHeight: 24 as TextStyle['lineHeight'],
        letterSpacing: 0.5 as TextStyle['letterSpacing'],
    },
    stepper: {
        fontSize: 16 as TextStyle['fontSize'],
        fontWeight: '400' as TextStyle['fontWeight'],
        lineHeight: 24 as TextStyle['lineHeight'],
        letterSpacing: 0.5 as TextStyle['letterSpacing'],
    },
    pagination: {
        fontSize: 14 as TextStyle['fontSize'],
        fontWeight: '400' as TextStyle['fontWeight'],
        lineHeight: 20 as TextStyle['lineHeight'],
        letterSpacing: 0.5 as TextStyle['letterSpacing'],
    },
    slider: {
        fontSize: 14 as TextStyle['fontSize'],
        fontWeight: '400' as TextStyle['fontWeight'],
        lineHeight: 20 as TextStyle['lineHeight'],
        letterSpacing: 0.5 as TextStyle['letterSpacing'],
    },
    switch: {
        fontSize: 14 as TextStyle['fontSize'],
        fontWeight: '400' as TextStyle['fontWeight'],
        lineHeight: 20 as TextStyle['lineHeight'],
        letterSpacing: 0.5 as TextStyle['letterSpacing'],
    },
    tabs: {
        fontSize: 14 as TextStyle['fontSize'],
        fontWeight: '400' as TextStyle['fontWeight'],
        lineHeight: 20 as TextStyle['lineHeight'],
        letterSpacing: 0.5 as TextStyle['letterSpacing'],
    },
};

export default typography;
