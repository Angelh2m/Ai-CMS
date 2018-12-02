export const shareThisPost = (e) => {
    const url = `${window.location}${e.target.id}`;

    if (e.target.className.includes('twitter')) {
        window.open("https://twitter.com/share?url=" + encodeURIComponent(url), null, 'width=500,height=500');
    }
    if (e.target.className.includes('facebook')) {
        window.open("http://www.facebook.com/sharer.php?u=" + encodeURIComponent(url), null, 'width=500,height=500');
    }
    if (e.target.className.includes('pinterest')) {
        window.open("https://www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(url), null, 'width=500,height=500');
    }
}