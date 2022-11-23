import chroma from "chroma-js";

//Opções para os selects
export const colorOptions = [
    { value: "1", label: "Rosa", color: "#ffb3ba" },
    { value: "2", label: "Vermelho", color: "#d9534f" },
    { value: "3", label: "Roxo", color: "#c9c9ff" },
    { value: "4", label: "Azul", color: "#7289da" },
    { value: "5", label: "Turquesa", color: "#008080" },
    { value: "6", label: "Verde", color: "#5cb85c" },
    { value: "7", label: "Lima", color: "#99cc33" },
    { value: "8", label: "Amarelo", color: "#ffcc00" },
    { value: "9", label: "Laranja", color: "#ff9966" },
    { value: "10", label: "Marrom", color: "#926a2d" },
    { value: "11", label: "Cinza", color: "#999999" },
    { value: "12", label: "Preto", color: "#252525" },
];

export const letterOptions = [
    { value: "1", label: "A" },
    { value: "2", label: "B" },
    { value: "3", label: "C" },
    { value: "4", label: "D" },
    { value: "5", label: "E" },
    { value: "6", label: "F" },
    { value: "7", label: "G" },
    { value: "8", label: "H" },
    { value: "9", label: "I" },
    { value: "10", label: "J" },
    { value: "11", label: "K" },
    { value: "12", label: "L" },
];

export const numberOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
];

export const characterOptions = [
    { value: "1", label: "Sawaco" },
    { value: "2", label: "Enola Holmes" },
    { value: "3", label: "Gerald" },
    { value: "4", label: "Bloom" },
    { value: "5", label: "Barbie" },
    { value: "6", label: "Anne" },
    { value: "7", label: "Charlie" },
    { value: "8", label: "Garfield" },
    { value: "9", label: "Pantera Negra" },
    { value: "10", label: "Homem Aranha" },
    { value: "11", label: "Eleven" },
    { value: "12", label: "Korra" },
];

//Ponto para o select de cor
const dot = (color = "transparent") => {
    return {
        alignItems: "center",
        display: "flex",
        "::before": {
            backgroundColor: color,
            borderRadius: 10,
            content: '" "',
            display: "block",
            marginRight: 10,
            height: 10,
            width: 10,
        },
    };
};

//Styles para os selects
export const styleColorOption = {
    control: (style) => {
        return {
            ...style,
            backgroundColor: "#eeeeee",
            color: "#555555",
        };
    },
    option: (style, state) => {
        const color = chroma(state.data.color);

        return {
            ...style,
            backgroundColor: state.isFocused ? color.css() : "#eeeeee",
            color: state.isFocused ? "#FFF" : "#555555",
            cursor: "pointer",
            ":active": {
                ...style[":active"],
                backgroundColor: !state.isDisabled ?
                    state.isSelected ?
                    state.data.color :
                    color.alpha(0.3).css() : undefined,
            },
        };
    },
    menu: (style) => ({
        ...style,
        backgroundColor: "#eeeeee",
    }),
    input: (style) => ({...style, ...dot() }),
    placeholder: (style) => ({...style, ...dot("#ccc") }),
    singleValue: (style, state) => ({...style, ...dot(state.data.color) }),
};