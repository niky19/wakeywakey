if input.light_level() > 200:
    music.play(music.string_playable("B A G A G F A C5 ", 120),
        music.PlaybackMode.UNTIL_DONE)
elif input.light_level() < 50:
    music.play(music.string_playable("D C D E D C D D ", 120),
        music.PlaybackMode.UNTIL_DONE)