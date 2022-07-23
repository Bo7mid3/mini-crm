import { translate } from "./translator";

export default function mapRouteNameToTitle(routeName) {
    switch(routeName) {
        case "ListRessources": return translate("RESSOURCES");
        case "AddRessource": return translate("ADD_RESSOURCE");
    };
    return routeName;
};