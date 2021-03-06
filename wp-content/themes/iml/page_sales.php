<?php
/*
Template Name: Sales
*/
?>

<?php get_header(); ?>

<script type="text/javascript">
$(function() {
    $("ul.tabs").tabs("div.panes > div");
});
</script>

<div id="content" class="hero-content row clear-nav" role="main">

  <div class="page-title row">
    <h1>Sales and Support</h1>
  </div>

  <div class="sales-leftcol-wrapper">
    <div class="sales-tabs-wrapper">
      <div class="sales-tabs">
        <ul class="tabs">
          <li><a href="#">Distributors</a></li>
          <li><a href="#">Sales Enquiries</a></li>
          <li><a href="#">Support Enquiries</a></li>
        </ul>
      </div><!-- sales-tabs -->

      <div class="panes">
        <!-- MAP -->
        <div class="pane pane-sales">
          
            <h2>Find a Heartworks distributor</h2>
          <p>Click on the map to find a Heartworks distributor in your region</p>
<?=do_shortcode('[simplemap]');?>
          
          <hr/>
          
          
        </div><!-- pane -->

        <!-- FAQ's -->
        <div class="pane pane-sales">
         <h2>Submit a Sales Enquiries</h2>

<?=do_shortcode('[si-contact-form form=\'1\']');?>

         
        </div><!-- pane -->
      
        <!-- Enquiries -->
        <div class="pane pane-sales">
          
             <h2>Submit a Support Enquiry</h2>
<?=do_shortcode('[si-contact-form form=\'1\']');?>
        
        </div><!-- pane -->
      </div> <!-- close panes -->
    </div><!-- products-tabs-wrapper -->
    <div class="sales-team">
          <h2>Contact our Sales Team Directly</h2>
          <p>Inventive Medical are now present in most countries via their distribution partners above. If we do not have currently have a distributor in your region then please contact us via the Sales and Support staff below.</p>
        <div class="row">
        <div class="contact-sales">
          <h2>Craig Henshaw</h2>
          <h3>Global Sales Manager</h3>
          <p>Tel: +44 (0) 203 447 9360<br/>
              Mob: +44 (0) 790 801 0253<br/>
              <a href="mailto:craig.henshaw@inventivemedical.com">Email Craig</a></p>
        </div>
        <div class="contact-sales">
          <h2>Thomas Brown</h2>
          <h3>Vice President North American Sales (Eastern Region) </h3>
          <p>Tel: +44 (0) 203 447 9360<br/>
              Mob: +44 (0) 790 801 0253<br/>
              <a href="mailto:craig.henshaw@inventivemedical.com">Email Thomas</a></p>
        </div>
        <div class="contact-sales">
          <h2>Michelle Press</h2>
          <h3>UK & Europe Sales Manager</h3>
          <p>Tel: +44 (0) 203 447 9360<br/>
              Mob: +44 (0) 790 801 0253<br/>
              <a href="mailto:craig.henshaw@inventivemedical.com">Email Michelle</a></p>
        </div>
      </div><!-- row -->

      <div class="contact-form-mobile row">
        <hr/>
        <?=do_shortcode('[si-contact-form form=\'2\']');?>
      </div>  
        </div><!-- sales-team -->


  </div> <!-- leftcol -->

  <div class="sidebar-wrapper">
<?php
  get_sidebar('upcoming-events');
  get_sidebar('news');
?>
  </div> <!-- sidebar wrapper -->

</div><!-- hero-content -->

<?php get_footer(); ?>
