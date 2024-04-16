const products = [
    {
        id: "SDFasdfbnsd",
        name: "SOMBRERO COPA CHAMBERGO",
        description: "Sombrero copa chambergo ala 12 color carton.",
        stock: 10,
        category: "gaucho",
        image: "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/434668669_2106956269656758_1471168523610315207_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JKSEjEilMzoAb6BJK3n&_nc_ht=scontent-eze1-1.xx&oh=00_AfBz8LjIwGWgXYw1Qkknr_bifcfwm8kSjNNcScFsrOewtQ&oe=661DAEF0"
    },
    {
        id: "HGSFSDfasdf",
        name: "SOMBRERO COPA NORTEÑA",
        description: "Sombrero copa norteña ala 10 color negro.",
        stock: 15,
        category: "gaucho",
        image: "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/435121447_2106956039656781_3124023013156397606_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XucM_9hpo8UAb7Sx0HC&_nc_ht=scontent-eze1-1.xx&oh=00_AfCIJjiwq6OK_oD2K61o-u29BtxKMxOhfHdW9pUyUfpYow&oe=661D9BFC"
    },
    {
        id: "HGAasdf",
        name: "SOMBRERO COPA REDONDA",
        description: "Sombrero copa redonda ala 12 color negro.",
        stock: 7,
        category: "gaucho",
        image: "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/434644787_2106956019656783_447658324757412634_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YfD10YRNOykAb5OcEjl&_nc_ht=scontent-eze1-1.xx&oh=00_AfAcns1jzGOceqNoYyorQR6kpl4fm-1-wcw-RGr7qIxOLQ&oe=661D9D6B"
    },
    {
        id: "SDatvasd",
        name: "SOMBRERO COPA NORTEÑA",
        description: "Sombrero copa norteña ala 12 color beige.",
        stock: 12,
        category: "gaucho",
        image: "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/434668321_2106955976323454_3403830797035277024_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Eb88Iu8HxqYAb4TTWur&_nc_ht=scontent-eze1-1.xx&oh=00_AfAPlRCNV7s9b9zdmUlECDNSJucKQS2bn43JVbOYAoTItw&oe=661DAC60"
    },
    {
        id: "SDfdsfdg",
        name: "SOMBRERO COYA",
        description: "Sombrero coya con tulmas.",
        stock: 12,
        category: "coya",
        image: "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/434661109_2106956202990098_9044664131085791589_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BRZxrEASJawAb7AOdtA&_nc_ht=scontent-eze1-1.xx&oh=00_AfB-FYGWGajoQNdSCU_6ShrSSh5VemlbMGQewrGRtGL7Ng&oe=661D981B"
    },
    {
        id: "SDatvasfsdd",
        name: "TULMAS COYAS",
        description: "tulmas coyas de lana de llana.",
        stock: 32,
        category: "coya",
        image: "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/434748760_2106956226323429_9024791628385120717_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8gpOF_doIK4Ab6Hwtr9&_nc_ht=scontent-eze1-1.xx&oh=00_AfDyy5kC6Q3XOqu9WrYZroEdQoyvkkTme-nph81_0TfxEg&oe=661DC485"
    },
    {
        id: "SDawesdd",
        name: "SOMBRERO SUREÑO CON GUARDA PAMPA",
        description: "sombrero sureño con guarda pampa ala 8 en color marron.",
        stock: 2,
        category: "sureño",
        image: "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/434668658_2106956129656772_9080130553693342436_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gALmf2i_mdQAb6WRfXZ&_nc_ht=scontent-eze1-1.xx&oh=00_AfB7d__ZrcldEIh10LRHDotiVGqrirCoENz6VnJ-sEUM8Q&oe=661D9E85"
    },
    {
        id: "Sasdftvasfsdd",
        name: "SOMBRERO SUREÑO CON GUARDA PAMPA",
        description: "Sombrero sureño con guarda pampa ala 7 en color verde.",
        stock: 32,
        category: "sureño",
        image: "https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/434731112_2106956082990110_7188051055516965785_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QeDKtV_3nL8Ab5GM7uA&_nc_ht=scontent-eze1-1.xx&oh=00_AfCM4JsxrozPGFequm5HAbEF-hUecvNmuC45bVBUrFd48g&oe=661DA3B7"
    },
];
const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 3000);
    });
};

export default getProducts