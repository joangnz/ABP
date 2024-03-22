package model.player;

import java.io.File;
import javax.sound.sampled.*;

public class musicPlayer {

    public static Clip clip;
    private static int clipStopPosition = 0;
    private static float lastVolume = 5f;
    private static String filepath;
    public static double durationInSeconds;
    private static boolean isPlaying = false; // track if a song is currently playing

    public static void playTurnTheLightsOff() {
        if (!isPlaying) {
            filepath = "src\\view\\wav\\Turn the Lights off - Tally Hall.wav";
            playMusic(filepath);
        } else {
            System.out.println("Another song is already playing.");
        }
    }

    public static void playTangledDreams() {
        if (!isPlaying) {
            filepath = "src\\view\\wav\\Tangled dreams.wav";
            playMusic(filepath);
        } else {
            System.out.println("Another song is already playing.");
        }
    }

    public static void playIntroBonito() {
        if (!isPlaying) {
            filepath = "src\\view\\wav\\Kero Kero Bonito - Intro Bonito.wav";
            playMusic(filepath);
        } else {
            System.out.println("Another song is already playing.");
        }
    }

    public static void playFruitcakeAndCookies() {
        if (!isPlaying) {
            filepath = "src\\view\\wav\\Fruitcake and Cookies.wav";
            playMusic(filepath);
        } else {
            System.out.println("Another song is already playing.");
        }
    }

    public static void playDiamondEyes() {
        if (!isPlaying) {
            filepath = "src\\view\\wav\\Deftones - Diamond Eyes.wav";
            playMusic(filepath);
        } else {
            System.out.println("Another song is already playing.");
        }
    }

    public static void playIronLung() {
        if (!isPlaying) {
            filepath = "src\\view\\wav\\My Iron Lung - Radiohead.wav";
            playMusic(filepath);
        } else {
            System.out.println("Another song is already playing.");
        }
    }

    public static void stopMusic() {                         // The music stops but the clip is not closed, and the position is stored. 
        if (clip != null && clip.isRunning()) {
            clipStopPosition = clip.getFramePosition();
            clip.stop();
            isPlaying = false;
        }
    }

    public static void completetlyStopMusic() {              // The music stops and the clip closes. The position is set to the start.
        if (clip != null && clip.isRunning()) {
            clip.stop();
            clip.close();
            clipStopPosition = 0;
            clip = null;
            isPlaying = false; 
        }
    }

    public static void playMusic(String location) {         

        try {
            File musicPath = new File(location);                           

            if (musicPath.exists()) {                                                           // First, it checks if the filepath is correct.
                AudioInputStream audioInput = AudioSystem.getAudioInputStream(musicPath);   // Creates an AudioSystem object that takes a "File" object, which returns an AudioInputStream, with all the song's data.
                clip = AudioSystem.getClip();                                                   // Makes the clip object get the system's audio data. With the clip object its easier to handle songs. 
                clip.open(audioInput);                                                    // Opens the song's clip.
                clip.setFramePosition(clipStopPosition);                                  // Sets the song's position (if any).
                AudioFormat format = audioInput.getFormat();                                    // Retrieves information of the audio.
                long frames = audioInput.getFrameLength();                                      // Retrieves total frames of the audio data. It uses long to store a large number..
                durationInSeconds = frames / format.getFrameRate();                             // Calculates the duration of the song in seconds. (format.getFrameRate gives how many frames per second are there. 
                clip.start();                                                                   // Starts playing the song
                setVolume(lastVolume);                                                    // Sets the volume
                isPlaying = true; 

            } else {
                System.out.println("Cannot find the file");                                    
            }
        } catch (Exception e) {
            System.out.println(e);
        }

    }

    public static void setVolume(float volume) {
        if (clip != null) {
            FloatControl gainControl = (FloatControl) clip.getControl(FloatControl.Type.MASTER_GAIN); // This will let you handle the clip's volume. 
            gainControl.setValue(volume); 
            lastVolume = volume;
        }
    }

    public static double getCurrentPosition() {                             // It returns the clip's position, so the slider and the labels can work with it. 
        if (clip != null) {
            return clip.getMicrosecondPosition() / 1_000_000.0;             // The value is in microseconds, so it needs to be turned into seconds.
        }
        return 0;
    }
}
