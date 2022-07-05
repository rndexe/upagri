<script>
    export let currentURL;
    import { Hamburger } from "svelte-hamburgers";
    import { fade } from "svelte/transition";

    let open = false;
    //console.log("hello")
    const urls = [
        { href: "/upagri", text: "About" },
        { href: "/upagri", text: "What is UPA?" },
        { href: "/upagri", text: "Exhibition Rooms" },
        { href: "/upagri", text: "Reading Rooms" },
        { href: "/upagri", text: "Contact" },
    ];
</script>

<nav class="fixed flex bg-eggshell w-full h-14 z-100">
    <div class="flex grow items-center justify-between border-b border-green mx-8 lg:mx-16">
        <a class="font-pt text-xl md:text-2xl text-green hover:opacity-50 transition-opacity" href="/upagri/">
            UPAgrI
        </a>
        <button class="block md:hidden">
            <Hamburger
                type="squeeze"
                --color="#2C5318"
                --layer-width="24px"
                --layer-height="2px"
                --layer-spacing="5px"
                bind:open
            />
        </button>

        <div class="hidden md:flex md:gap-x-4 lg:gap-x-12 text-green-dark font-azeret text-base md:text-sm lg:text-base">
            {#each urls as item}
                <a class="hover:opacity-50 transition-opacity" href={item.href}>
                    {item.text}
                </a>
            {/each}
        </div>
    </div>
</nav>
{#if open}
    <div transition:fade class="fixed w-full top-14 bg-eggshell text-green-dark font-azeret text-base p-8 z-50">
        {#each urls as item}
            <div class="py-2">
                <a  href={item.href}>
                    {item.text}
                </a>
            </div>
        {/each}
    </div>
{/if}
