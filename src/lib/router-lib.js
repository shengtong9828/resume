import { computed } from "vue";
import { useRouter } from "vue-router";

const routerJump = () => {
    const router = useRouter();
    const toPage = path => router.push(path);
    return {
        toPage
    };
};

const pathToSign = () => {
    const router = useRouter();
    const title = computed(() => {
      const { path } = router.currentRoute.value;
      return path === "/" ? "I'M" : "";
    });
    const desc = computed(() => {
      const { path, name } = router.currentRoute.value;
      return desc.value = path === "/" ? "Mask" : name;
    });
    return {
        title,
        desc
    }
}

const quitStatus = () => {
    const router = useRouter();
    const showStatus = computed(() => {
      const { path } = router.currentRoute.value;
      return path === "/" ? false : true;
    });
    return {
        showStatus
    }
}

export {
    routerJump,
    pathToSign,
    quitStatus
}