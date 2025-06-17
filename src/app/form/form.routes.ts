import { Address } from "./address/address";
import { Reset } from "./reset/reset";
import { Select } from "./select/select";

export const FORM_ROUTES = [
    {
        path: 'address',
        component: Address
    },
    {
        path: 'reset',
        component: Reset
    },
    {
        path: 'select',
        component: Select
    }
]