package dock.dockhunt;

import android.content.Intent;
import android.graphics.Typeface;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class DuckGame extends AppCompatActivity {
    EditText name;
    Button startGame;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        name = findViewById(R.id.editText);
        startGame = findViewById(R.id.startgame);
        changeFont();

        startGame.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String nick = name.getText().toString();

                if(nick.isEmpty()){
                    name.setError("El nombre del jugador es obligatorio");
                    return;
                }
                Intent i = new Intent(DuckGame.this, DuckGameStage.class);
                i.putExtra("nick", nick);
                startActivity(i);

            }
        });
    }

    private void changeFont(){
        Typeface typeface = Typeface.createFromAsset(getAssets(), "pixel.ttf");
        startGame.setTypeface(typeface);
        name.setTypeface(typeface);

    }
}
