if (input.lightLevel() > 200) {
    music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.UntilDone)
} else if (input.lightLevel() < 50) {
    music.play(music.stringPlayable("D C D E D C D D ", 120), music.PlaybackMode.UntilDone)
}
