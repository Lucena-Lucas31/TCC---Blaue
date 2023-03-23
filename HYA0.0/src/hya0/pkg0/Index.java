package hya0.pkg0;

import java.awt.Color;
import java.awt.Graphics;
import java.awt.GraphicsDevice;
import java.awt.GraphicsEnvironment;
import java.awt.Image;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class Index extends JFrame{
    
    // variáveis para redimensionar o background
    BackgroundIndex BgIndex = new BackgroundIndex();
    GraphicsDevice gDevice;
    int ScreenWidth;
    int ScreenHeight;
    
    ImageIcon Jogar = new ImageIcon(getClass().getResource("/img/Jogar.png"));
    JButton btJogar = new JButton(Jogar);
    JButton btRegras = new JButton(Jogar);
    
    public Index(){
        
  }
    
    // Backgorund responsivo (Adaptável a tela)
    
    public void Background(){
        GraphicsEnvironment Graficos = GraphicsEnvironment.getLocalGraphicsEnvironment();
        gDevice = Graficos.getDefaultScreenDevice();
        gDevice.setFullScreenWindow(this);
        ScreenWidth = this.getWidth();
        ScreenHeight = this.getHeight();
        
        this.setContentPane(BgIndex);
        setSize(ScreenWidth, ScreenHeight);
        setTitle("Tela Incial");
        setLocationRelativeTo(null);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLayout(null);
       
        
        // BOTÃO JOGAR ====================================================================
        
        JPanel BtJogarPanel = new JPanel();
        // Local do botão
        int BJP_x = (int)Math.round(ScreenWidth*0.375);
        int BJP_y = (int)Math.round(ScreenHeight*0.200);
        
        // Tamanho do botão
        int BJP_w = (int)Math.round(ScreenWidth*0.20);
        int BJP_h = (int)Math.round(ScreenHeight*0.125);
        
        BtJogarPanel.setBounds(BJP_x, BJP_y, BJP_w, BJP_h);
        BtJogarPanel.setAlignmentX(CENTER_ALIGNMENT);
        btJogar.setIcon(new ImageIcon(Jogar.getImage().getScaledInstance(BtJogarPanel.getWidth(), BtJogarPanel.getHeight(), Image.SCALE_DEFAULT)));;
        BtJogarPanel.add(btJogar);
        
        BtJogarPanel.setBackground(new Color(0,0,0,0));
        BtJogarPanel.setOpaque(false);
        BtJogarPanel.setFocusable(false);
        btJogar.setBackground(new Color(0,0,0,0));
        btJogar.setBorderPainted(false);
        btJogar.setOpaque(false);
        btJogar.setContentAreaFilled(false);
        btJogar.setFocusable(false);
        add(BtJogarPanel);
        
        btJogar.addActionListener(new ActionListener() {                            
            public void actionPerformed(ActionEvent e) {

                dispose();                        
            } 
        });
        
        btJogar.setVisible(false);
        
        // BOTÃO REGRAS ====================================================================

        JPanel BtRegrasPanel = new JPanel();
        // Local do botão
        int BRP_x = (int)Math.round(ScreenWidth*0.375);
        int BRP_y = (int)Math.round(ScreenHeight*0.200);
        
        // Tamanho do botão
        int BRP_w = (int)Math.round(ScreenWidth*0.20);
        int BRP_h = (int)Math.round(ScreenHeight*0.125);
        
        BtRegrasPanel.setBounds(BRP_x, BRP_y, BRP_w, BRP_h);
        BtRegrasPanel.setAlignmentX(CENTER_ALIGNMENT);
        btRegras.setIcon(new ImageIcon(Jogar.getImage().getScaledInstance(BtRegrasPanel.getWidth(), BtRegrasPanel.getHeight(), Image.SCALE_DEFAULT)));;
        BtRegrasPanel.add(btRegras);
        
        BtRegrasPanel.setBackground(new Color(0,0,0,0));
        BtRegrasPanel.setOpaque(false);
        BtRegrasPanel.setFocusable(false);
        btRegras.setBackground(new Color(0,0,0,0));
        btRegras.setBorderPainted(false);
        btRegras.setOpaque(false);
        btRegras.setContentAreaFilled(false);
        btRegras.setFocusable(false);
        add(BtRegrasPanel);
        
        btRegras.addActionListener(new ActionListener() {                            
            public void actionPerformed(ActionEvent e) {

                dispose();                        
            } 
        });
        
        
        btRegras.setVisible(true);
        
        
    }
    
    // Classe para deixar o Background responsivo   
    class BackgroundIndex extends JPanel {
    
    private Image imagem;
    
    @Override
    public void paint(Graphics g){  
        imagem = new ImageIcon(getClass().getResource("/img/BgIndex.png")).getImage();
        
        g.drawImage(imagem, 0, 0, getWidth(), getHeight(), this);
        
        setOpaque(false);
        
        super.paint(g);
        
    }
    
  }
}
