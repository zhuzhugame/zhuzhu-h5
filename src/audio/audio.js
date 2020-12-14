import { Howl } from 'howler';

export class Audio {
    _sound;
    constructor(audioFiles) {
        this._sound = new Howl({
            src: audioFiles
        });
    }

    play() {
        this._sound.play();
    }

    stop() {
        this._sound.stop();
    }
}
