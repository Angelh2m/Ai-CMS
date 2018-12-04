export const shareThisPost = (e, media, title) => {
    const url = `${window.location}${e.target.id}`;
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
    var winTop = (window.innerHeight / 2) - (window.innerHeight / 2);
    var winLeft = (window.innerWidth / 2) - (window.innerWidth / 2);

    if (e.target.className.includes('twitter')) {
        window.open("https://twitter.com/share?url=" + encodeURIComponent(url), null, 'width=500,height=500');
    }
    if (e.target.className.includes('facebook')) {
        window.open("http://www.facebook.com/sharer.php?u=" + encodeURIComponent(url), null, 'width=500,height=500');
        window.open('http://www.facebook.com/sharer.php?u=' + url, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);

    }
    if (e.target.className.includes('pinterest')) {
        // window.open("http://pinterest.com/pin/create/link/?url=" + encodeURIComponent(url), null, 'width=500,height=500');
        window.open('https://www.pinterest.com/pin/create/button/?url=' + url + '&media=' + media + '&description=' + title, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);

    }
    // function fbShare(url, winWidth, winHeight) {

    // }
    // function pinShare(url, title, media, winWidth, winHeight) {
    //     var winTop = (screen.height / 2) - (winHeight / 2);
    //     var winLeft = (screen.width / 2) - (winWidth / 2);
    //     window.open('https://www.pinterest.com/pin/create/button/?url=' + url + '&media=' + media + '&description=' + title, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
    // }
    // function twitterShare(url, title, winWidth, winHeight) {
    //     var winTop = (screen.height / 2) - (winHeight / 2);
    //     var winLeft = (screen.width / 2) - (winWidth / 2);
    //     uri = encodeURIComponent(url);
    //     window.open('http://twitter.com/share?url=' + uri + '&text=' + title, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
    // }
}
