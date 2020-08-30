export class API {
    constructor(artist, song){
        this.artist = artist;
        this.song = song;
    }
    // Method
    async queryAPI() {
        const url = await fetch(`https://api.lyrics.ovh/v1/${this.artist}/${this.song}`);
        const lyric = await url.json();
        return {
            lyric
        }
    }
}