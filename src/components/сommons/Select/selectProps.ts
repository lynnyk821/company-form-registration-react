type Item = {
    id: number,
    value: string,
}

type SelectProps = {
    width : string,
    widthSelect: string,
    height : string,
    padding: string,
    selectedValue : string,
    items: Item[],
    keyValue : string,
    onChangeSelectedValue: () => void,
}