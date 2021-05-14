import { useRouter } from "vue-router";

const routerJump = () => {
    const router = useRouter();
    const toPage = path => router.push(path);
    return {
        toPage
    };
};

export {
    routerJump
}