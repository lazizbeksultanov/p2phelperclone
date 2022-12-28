import {
    BinanceIcon,
    Okx,
    Huobi,
    RosbankIcon,
    TinkoffIcon,
    UralsibIcon,
    QiwiIcon,
    YumoneyIcon,
    CreditBankIcon,
    MTSIcon,
    PostIcon,
    USDT,
    BUSD,
    BTS,
    SHIB,
    BNB,
    ETH,
} from "./../../Icons/ExportIcons";

export const columns = [
    {
        Header: "Связка",
        accessor: "bundle",
    },
    {
        Header: "Объявление 1",
        accessor: "announcement_1",
    },
    {
        Header: "Объявление 2",
        accessor: "announcement_2",
    },
    {
        Header: "Лимиты",
        accessor: "limits",
    },
    {
        Header: "Спред",
        accessor: "spread",
        Cell: (s) => (
            <span className={s?.value?.className ? s?.value?.className : ""}>
                {s?.value?.value}
            </span>
        ),
    },
    {
        Header: "Профит",
        accessor: "profit",
        Cell: (s) => (
            <span className={s?.value?.className ? s?.value?.className : ""}>
                {s?.value?.value}
            </span>
        ),
    },
];

export const tableMockData = [
    {
        bundle: "Авторизируйтесь, чтобы увидеть связки",
        announcement_1: "*****",
        announcement_2: "*****",
        limits: "200 - 463.557",
        spread: { value: "48.81%", className: "success" },
        profit: { value: "195.24", className: "success" },
    },
    {
        bundle: "Авторизируйтесь, чтобы увидеть связки",
        announcement_1: "*****",
        announcement_2: "*****",
        limits: "200 - 463.557",
        spread: { value: "48.81%", className: "success" },
        profit: { value: "195.24", className: "success" },
    },
    {
        bundle: "Авторизируйтесь, чтобы увидеть связки",
        announcement_1: "*****",
        announcement_2: "*****",
        limits: "200 - 463.557",
        spread: { value: "48.81%", className: "success" },
        profit: { value: "195.24", className: "success" },
    },
    {
        bundle: "Авторизируйтесь, чтобы увидеть связки",
        announcement_1: "*****",
        announcement_2: "*****",
        limits: "200 - 463.557",
        spread: { value: "48.81%", className: "success" },
        profit: { value: "195.24", className: "success" },
    },
    {
        bundle: "Авторизируйтесь, чтобы увидеть связки",
        announcement_1: "*****",
        announcement_2: "*****",
        limits: "200 - 463.557",
        spread: { value: "48.81%", className: "error" },
        profit: { value: "195.24", className: "success" },
    },
    {
        bundle: "Авторизируйтесь, чтобы увидеть связки",
        announcement_1: "*****",
        announcement_2: "*****",
        limits: "200 - 463.557",
        spread: { value: "48.81%", className: "success" },
        profit: { value: "195.24", className: "error" },
    },
];

export const dataVenues = [
    {
        label: (
            <span className="multi-select-item">
                <BinanceIcon />
                binance
            </span>
        ),
        value: "id1",
    },
    {
        label: (
            <span className="multi-select-item">
                <Okx />
                okx
            </span>
        ),
        value: "id2",
    },
    {
        label: (
            <span className="multi-select-item">
                <Huobi />
                huobi
            </span>
        ),
        value: "id3",
    },
];

export const currency = [
    { label: "RUB", value: "id1" },
    { label: "EUR", value: "id2" },
    { label: "USD", value: "id3" },
    { label: "UAH", value: "id4" },
];

export const dataMethods = [
    {
        label: (
            <span className="multi-select-item">
                <RosbankIcon />
                Росбанк
            </span>
        ),
        value: "Росбанк",
    },
    {
        label: (
            <span className="multi-select-item">
                <TinkoffIcon />
                Тинькофф
            </span>
        ),
        value: "Тинькофф",
    },
    {
        label: (
            <span className="multi-select-item">
                <UralsibIcon />
                Уралсиб
            </span>
        ),
        value: "Уралсиб",
    },
    {
        label: (
            <span className="multi-select-item">
                <QiwiIcon />
                QIWI
            </span>
        ),
        value: "QIWI",
    },
    {
        label: (
            <span className="multi-select-item">
                <YumoneyIcon />
                Юmoney
            </span>
        ),
        value: "Юmoney",
    },
    {
        label: (
            <span className="multi-select-item">
                <CreditBankIcon />
                Home Credit Bank (Russia)
            </span>
        ),
        value: "CreditBank",
    },
    {
        label: (
            <span className="multi-select-item">
                <MTSIcon />
                MTS- Bank
            </span>
        ),
        value: "MTS",
    },
    {
        label: (
            <span className="multi-select-item">
                <PostIcon />
                Post Bank
            </span>
        ),
        value: "PostBank",
    },
];

export const dataCryptocurrencies = [
    {
        label: (
            <span className="multi-select-item">
                <USDT />
                USDT
            </span>
        ),
        value: "USDT",
    },
    {
        label: (
            <span className="multi-select-item">
                <BUSD />
                BUSD
            </span>
        ),
        value: "BUSD",
    },
    {
        label: (
            <span className="multi-select-item">
                <BTS />
                BTS
            </span>
        ),
        value: "BTS",
    },
    {
        label: (
            <span className="multi-select-item">
                <SHIB />
                SHIB
            </span>
        ),
        value: "SHIB",
    },
    {
        label: (
            <span className="multi-select-item">
                <BNB />
                BNB
            </span>
        ),
        value: "BNB",
    },
    {
        label: (
            <span className="multi-select-item">
                <ETH />
                ETH
            </span>
        ),
        value: "ETH",
    },
];

export const makerData = [
    { label: "Мейкер-Мейкер", value: "id1" },
    { label: "Тейкер-Мейкер", value: "id2" },
    { label: "Мейкер-Тейкер", value: "id3" },
    { label: "Тейкер-Тейкер", value: "id4" },
];
