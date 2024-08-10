import utils from "@/utils";

export default {
    teste: utils.env.get("TESTE"),
    publicTeste: utils.env.get("NEXT_PUBLIC_TESTA"),
    feijao: utils.env.get("NEXT_PUBLIC_ANALYTICS_ID")
}