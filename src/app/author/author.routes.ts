import { AuthorForm } from "./author-form/author-form";

export default [
    {
        path: '',
        component: AuthorForm
    }, {
        path: ':id',
        component: AuthorForm
    }
];