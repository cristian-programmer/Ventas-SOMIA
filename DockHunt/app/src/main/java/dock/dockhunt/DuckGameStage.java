package dock.dockhunt;

import android.content.Intent;
import android.graphics.Point;
import android.graphics.Typeface;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.view.Display;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.Random;


public class DuckGameStage extends AppCompatActivity {
    private TextView nick, timer, points ;
    private String otimer, opoints;
    private ImageView duck;
    private int counter;
    int wscreen, hscreen;
    Random random;
    MediaPlayer sound;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_duck_game_stage);
        ScreenSize();
        isGameOver();
        nick = findViewById(R.id.nick);
        timer = findViewById(R.id.counterTimer);
        points = findViewById(R.id.counterDuck);
        duck = findViewById(R.id.duck);
        sound = MediaPlayer.create(DuckGameStage.this, R.raw.sounddock);

        changeFont();


        Bundle extras = getIntent().getExtras();
        String name = extras.getString("nick");
        nick.setText(name);

        duck.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                counter++;
                points.setText(String.valueOf(counter));

                sound.start();
                duck.setImageResource(R.drawable.duck_clicked);


                new Handler().postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        duck.setImageResource(R.drawable.duck);
                        moveDock();
                    }
                }, 500);

            }
        });


    }

    private void isGameOver() {
      new CountDownTimer(60000, 1000) {
          @Override
          public void onTick(long millisUntilFinished) {
              long  lastmills = millisUntilFinished / 1000;
              timer.setText(lastmills + "s");
          }

          @Override
          public void onFinish() {
              timer.setText("0s");
          }
      }.start();

    }

    private void moveDock() {
        int min = 0;
        int max_x = wscreen - duck.getWidth();
        int max_y = hscreen - duck.getHeight();

        int random_x  = random.nextInt(((max_x - min) + 1) + min );
        int randon_y  = random.nextInt(((max_y - min )+ 1) + min );
        duck.setX(random_x);
        duck.setY(randon_y);


    }

    private void ScreenSize(){
        Display display = getWindowManager().getDefaultDisplay();
        Point size = new Point();
        display.getSize(size);
        wscreen = size.x;
        hscreen = size.y;

        random = new Random();

    }

    private void changeFont(){
        Typeface typeface = Typeface.createFromAsset(getAssets(), "pixel.ttf");
        nick.setTypeface(typeface);
        timer.setTypeface(typeface);
        points.setTypeface(typeface);
    }

}
