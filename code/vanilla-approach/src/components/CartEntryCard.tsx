import { CartEntry } from "../types";
import Button from "./Button";
import Label from "./Label";
import { Theme } from "../theme";

type PropType = {
    entry: CartEntry;
    theme: Theme;
    onAddClicked: () => void;
    onRemoveClicked: () => void;
};

export function CartEntryCard({
    entry,
    theme,
    onAddClicked,
    onRemoveClicked,
}: PropType) {
    const { img, price, name } = entry.article;
    return (
        <div
            style={{
                borderRadius: 16,
                display: "flex",
                gridGap: 8,
            }}
        >
            <img
                style={{ borderRadius: 16, marginBottom: 8, height: 100 }}
                src={img}
                alt={name}
            />

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <br />
                <Label theme={theme} bold>
                    {name}
                </Label>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gridGap: 4,
                    }}
                >
                    <div style={{ paddingRight: 24 }}>
                        <Label
                            theme={theme}
                        >{`${price.value}${price.currency}`}</Label>
                    </div>
                    <Button
                        onClick={onRemoveClicked}
                        theme={theme}
                        type={"secondary"}
                    >
                        -
                    </Button>
                    <Label theme={theme}>{entry.count}</Label>
                    <Button onClick={onAddClicked} theme={theme}>
                        +
                    </Button>
                </div>
            </div>
        </div>
    );
}
